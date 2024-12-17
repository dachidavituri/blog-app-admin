import { Table } from "antd";
import { useGetUsers } from "../../../../../react-query/query/users";
const { Column } = Table;
const AdminUsersView: React.FC = () => {
  const { data: usersList } = useGetUsers();

  return (
    <Table bordered dataSource={usersList} pagination={false} rowKey="id">
      <Column title="Email" dataIndex="email" />
      <Column
        title="Phone"
        dataIndex="phone"
        render={(text) => (text ? text : "Not found")}
      />
      <Column title="Created at" dataIndex="created_at" />
      <Column title="Updated at" dataIndex="updated_at" />
      <Column title="Actions" />
    </Table>
  );
};
export default AdminUsersView;
