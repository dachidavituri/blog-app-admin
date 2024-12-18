import { Button, Table } from "antd";
import { useGetBlogs } from "../../../../../react-query/query/blogs";
import { formatDate } from "../../../../../lib/formatDate";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
const { Column } = Table;
const AdminBlogsView: React.FC = () => {
  const navigate = useNavigate();
  const { data: blogsList } = useGetBlogs();
  console.log(blogsList);
  const handleNavigateBlogCreate = () => {
    navigate("/dashboard/admin/blog-create");
  };
  const handleNavigateBlogEdit = (id: number) => {
    navigate(`/dashboard/admin/blog-update/${id}`);
  };
  return (
    <Table
      title={() => {
        return (
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleNavigateBlogCreate}
          >
            Create Blog
          </Button>
        );
      }}
      bordered
      dataSource={blogsList}
      pagination={false}
      rowKey="id"
    >
      <Column title="User_id" dataIndex="user_id" />
      <Column
        title="Created at"
        dataIndex="created_at"
        render={(created_at) => formatDate(created_at)}
      />
      <Column title="Title" dataIndex="title_ka" />
      {/* <Column title="Title" dataIndex="title_en" /> translate this */}
      <Column title="Description" dataIndex="description_ka" />
      {/* <Column title="Description" dataIndex="description_en" /> translate this*/}
      <Column
        title="Actions"
        render={(_, row) => (
          <EditOutlined
            className="text-yellow-600"
            onClick={() => handleNavigateBlogEdit(row.id)}
          />
        )}
      />
    </Table>
  );
};
export default AdminBlogsView;
