import { Table } from "antd";
import { useGetBlogs } from "../../../../../react-query/query/blogs";
import { formatDate } from "../../../../../lib/formatDate";
const { Column } = Table;
const AdminBlogsView: React.FC = () => {
  const { data: blogsList } = useGetBlogs();
  return (
    <Table bordered dataSource={blogsList} pagination={false} rowKey="id">
      <Column title="User_id" dataIndex="user_id" />
      <Column title="Created at" dataIndex="created_at" render={(created_at) => formatDate(created_at)}/>
      <Column title="Title" dataIndex="title_ka" />
      {/* <Column title="Title" dataIndex="title_en" /> translate this */}
      <Column title="Description" dataIndex="description_ka" />
      {/* <Column title="Description" dataIndex="description_en" /> translate this*/}
      <Column title="Actions" />
    </Table>
  );
};
export default AdminBlogsView;
