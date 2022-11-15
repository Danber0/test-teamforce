import React, { useState } from "react";
import { Button, Switch, Table } from "antd";

import "./TableComponent.scss";

import { DataSourceI } from "types";

import ArrowUp from "components/ArrowUp";
import ArrowDown from "components/ArrowDown";
import CheckBox from "components/CheckBox";

const { Column } = Table;

const dataSource = [
  {
    key: "1",
    name: "WeMakeItSafer",
    segment: "Информационные технологии",
    confirmed: false,
    accreditation: true,
    date: new Date().toDateString(),
    blocked: false,
    contact: "8931-321-23-56",
    subData: [
      {
        key: "1",
        organization: "WeMakeItSafer",
        segment: "Информационные технологии",
        subConfirmed: true,
        subAccreditation: true,
        date: new Date().toDateString(),
        subBlocked: false,
      },
      {
        key: "2",
        organization: "WeMakeItSafer",
        segment: "Информационные технологии",
        subConfirmed: true,
        subAccreditation: true,
        date: new Date().toDateString(),
        subBlocked: false,
      },
    ],
  },
  {
    key: "2",
    name: "Daniil",
    segment: "IT технологии",
    confirmed: true,
    accreditation: true,
    date: new Date().toDateString(),
    blocked: false,
    contact: "8931-321-23-56",
    subData: [
      {
        key: "2",
        organization: "Daniil",
        segment: "IT технологии",
        subConfirmed: true,
        subAccreditation: true,
        date: new Date().toDateString(),
        subBlocked: false,
      },
    ],
  },
];

const columns = (role: string) => [
  {
    title: "Партнер",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Сегмент",
    dataIndex: "segment",
    key: "segment",
  },
  {
    title: "Подтверждён",
    dataIndex: "confirmed",
    key: "confirmed",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
  {
    title: "Аккредитован",
    dataIndex: "accreditation",
    key: "accreditation",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
  {
    title: "Дата включения в сеть",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Заблокирован",
    dataIndex: "blocked",
    key: "blocked",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
  {
    title: "Контакты",
    dataIndex: "contact",
    key: "contact",
  },
];

const subColumns = (role: string) => [
  {
    title: "Организация",
    dataIndex: "organization",
    key: "organization",
  },
  {
    title: "Сегмент",
    dataIndex: "segment",
    key: "Сегмент",
  },
  {
    title: "Подтвержден",
    dataIndex: "subConfirmed",
    key: "subConfirmed",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
  {
    title: "Аккредитован",
    dataIndex: "subAccreditation",
    key: "subAccreditation",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
  {
    title: "Дата включения в сеть",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Заблокирован",
    dataIndex: "subBlocked",
    key: "subBlocked",
    render: (value: boolean) => (
      <CheckBox check={value} disabled={role === "moderator"} />
    ),
  },
];

const TableComponents = () => {
  const [data, setData] = useState<DataSourceI[]>(dataSource);
  const [count, setCount] = useState(3);
  const [role, setRole] = useState<"moderator" | "admin">("admin");

  const handleChangeSwitch = (value: boolean) => {
    setRole(value ? "admin" : "moderator");
  };

  const handleAddPartner = () => {
    setData([
      ...data,
      {
        key: `${count}`,
        name: `WeMakeItSafer ${count}`,
        segment: "Информационные технологии",
        confirmed: false,
        accreditation: true,
        date: new Date().toDateString(),
        blocked: false,
        contact: "8931-321-23-56",
        subData: [
          {
            key: `${count}`,
            organization: `WeMakeItSafer ${count}`,
            segment: `Информационные технологии ${count}`,
            subConfirmed: true,
            subAccreditation: true,
            date: new Date().toDateString(),
            subBlocked: false,
          },
        ],
      },
    ]);
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="main">
      <Switch
        defaultChecked
        onChange={handleChangeSwitch}
        checkedChildren="admin"
      />
      <p>toggle role</p>
      <Table
        className="table"
        bordered
        dataSource={data}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <React.Fragment>
              {
                <Table
                  dataSource={record.subData}
                  bordered
                  pagination={false}
                  className="table_inner"
                >
                  {subColumns(role).map((col) => (
                    <Column
                      title={col.title}
                      dataIndex={col.dataIndex}
                      key={col.key}
                      render={col.render}
                    />
                  ))}
                </Table>
              }
            </React.Fragment>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <ArrowDown onClick={(e: any) => onExpand(record, e)} />
            ) : (
              <ArrowUp onClick={(e: any) => onExpand(record, e)} />
            ),
        }}
      >
        {columns(role).map((col) => (
          <Column
            title={col.title}
            dataIndex={col.dataIndex}
            key={col.key}
            render={col.render}
          />
        ))}
      </Table>
      <br />
      <Button
        type="primary"
        onClick={handleAddPartner}
        disabled={role === "moderator"}
      >
        Add Partner
      </Button>
    </div>
  );
};

export default TableComponents;
