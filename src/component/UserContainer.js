import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../action/userActions";

function UserContainer(props) {
  useEffect(() => {
    props.getUser("dari UserContainer");
  }, []);

  return props.userCatalog.loading ? (
    <h2>loading....</h2>
  ) : props.userCatalog.error ? (
    <h2>Error: {props.userCatalog.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {props.userCatalog &&
          props.userCatalog.users &&
          props.userCatalog.users.map((user, index) => {
            return <span>{user.name}</span>;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    userCatalog: state.users,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUser: (tmp) => dispatch(getUsers(tmp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
