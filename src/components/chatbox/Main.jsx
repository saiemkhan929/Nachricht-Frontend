import React, { Component } from "react";
import UserHeader from "./left-parts/UserHeader";
import ChatList from "./left-parts/ChatList";
import ChatHeader from "./right-parts/ChatHeader";
import ChatFooter from "./right-parts/ChatFooter";
import "./main.scss";
import ChatBody from "./right-parts/ChatBody";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import constants from "./../../store/constants";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (!this.props.auth.email) return <Redirect to="/" />;

    return (
      <div className="chatbox">
        <div className="left_part">
          <UserHeader data={this.props.auth} />
          <ChatList />
        </div>
        <div className="right_part">
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </div>
      </div>
    );
  }
}

export default connect((s) => s)(Main);
