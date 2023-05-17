import { Header } from "../../components/Header/Header";
import { TaskManager } from "../../components/TaskManager/TaskManager";
import { Timer } from "../../components/Timer/Timer";
import "./mainPage.css";
import { StoreProvider } from "easy-peasy";
import taskStore from "../../store/taskStore"

export function MainPage() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="mainPage">
          <StoreProvider store={taskStore}>
            <TaskManager />
            <Timer />
          </StoreProvider>        
        </div>
      </div >
      <div id='modal' />
    </div>
  );
}
