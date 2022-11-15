import React, { useState } from "react";
import { Button, Checkbox, Switch, Table } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import "./TableComponent.scss";

import { DataSourceI } from "../../types";

const { Column } = Table;

const dataSource = [
  {
    key: "1",
    name: "Wemakefab",
    segment: "Информационные технологии",
    confirmed: false,
    accreditation: true,
    date: new Date().toDateString(),
    blocked: false,
    contact: "8931-321-23-56",
    subData: [
      {
        key: "1",
        organization: "Wemakefab",
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

const TableComponents = () => {
  const [data, setData] = useState<DataSourceI[]>(dataSource);
  const [count, setCount] = useState(3);
  const [role, setRole] = useState<"moderator" | "admin">("admin");

  const handleClickCheckbox = (
    event: CheckboxChangeEvent,
    rowIndex: number,
    columnKey: string
  ) => {
    const newCheckboxState: any = [...data];
    newCheckboxState[rowIndex][columnKey] = event.target.checked;
    setData(newCheckboxState);
  };

  const handleClickCheckboxSub = (
    event: CheckboxChangeEvent,
    record: DataSourceI,
    rowIndex: number,
    columnKey: string
  ) => {
    const newCheckboxState: any = [...data];
    newCheckboxState[Number(record.key) - 1].subData[rowIndex][columnKey] =
      event.target.checked;
    setData(newCheckboxState);
  };

  const handleChangeSwitch = (value: boolean) => {
    setRole(value ? "admin" : "moderator");
  };

  const handleAdd = () => {
    console.log(dataSource[0]);
    setData([
      ...data,
      {
        key: `${count}`,
        name: `Wemakefab ${count}`,
        segment: "Информационные технологии",
        confirmed: false,
        accreditation: true,
        date: new Date().toDateString(),
        blocked: false,
        contact: "8931-321-23-56",
        subData: [
          {
            key: `${count}`,
            organization: `Wemakefab ${count}`,
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

  console.log(data);
  const columns = [
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
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) =>
            handleClickCheckbox(event, rowIndex, "confirmed")
          }
        />
      ),
    },
    {
      title: "Аккредитован",
      dataIndex: "accreditation",
      key: "accreditation",
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) =>
            handleClickCheckbox(event, rowIndex, "accreditation")
          }
        />
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
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) => handleClickCheckbox(event, rowIndex, "blocked")}
        />
      ),
    },
    {
      title: "Контакты",
      dataIndex: "contact",
      key: "contact",
    },
  ];

  const subColumns = [
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
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) =>
            handleClickCheckboxSub(event, record, rowIndex, "subConfirmed")
          }
        />
      ),
    },
    {
      title: "Аккредитован",
      dataIndex: "subAccreditation",
      key: "subAccreditation",
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) =>
            handleClickCheckboxSub(event, record, rowIndex, "subAccreditation")
          }
        />
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
      render: (value: boolean, record: DataSourceI, rowIndex: number) => (
        <Checkbox
          checked={value}
          disabled={role !== "admin"}
          onChange={(event) =>
            handleClickCheckboxSub(event, record, rowIndex, "subBlocked")
          }
        />
      ),
    },
  ];

  return (
    <div className="table">
      <Switch
        defaultChecked
        onChange={handleChangeSwitch}
        checkedChildren="admin"
      />
      <p>toggle role</p>
      <Table
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
                  {subColumns.map((col) => (
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
        }}
      >
        {columns.map((col) => (
          <Column
            title={col.title}
            dataIndex={col.dataIndex}
            key={col.key}
            render={col.render}
          />
        ))}
      </Table>
      <Button
        type="primary"
        onClick={handleAdd}
        disabled={role === "moderator"}
      >
        Add
      </Button>
    </div>
  );
};

export default TableComponents;
