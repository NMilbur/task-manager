import TaskDetail from "_components/_organisms/TaskDetail";
import Page from "_components/_templates/Page";

const TaskList = () => {
  return (
    <Page showTopNav showSideNav fullWidth>
      <TaskDetail />
    </Page>
  );
};

export default TaskList;
