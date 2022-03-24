import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { apiFetch } from "./reducer/action";
class App extends Component {
  componentDidMount() {
    this.props.apiFetchData();
  }
  renderInfo = () => {
    const { data } = this.props;
    console.log(data);
    return data?.hits.map((item, index) => {
      console.log(item?.created_at);
      return (
        <div key={index} className="col-4 text-center text-white">
          <div className=" bg-dark m-4 p-2">
            <p>
              <strong>Title:</strong> {item?.title}
            </p>
            <p>
              <strong>Url:</strong> {item?.url}
            </p>
            <p className="m-0">
              <strong>Created_at: </strong>
              {new Date(item?.created_at).toLocaleTimeString()}{" "}
              {new Date(item?.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderInfo()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.reducerApi.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    apiFetchData: () => {
      dispatch(apiFetch());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
