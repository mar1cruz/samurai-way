import { connect } from "react-redux";
import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import { Dispatch } from "redux";

interface MapStateToPropsType {
    users: UserType[];
}

interface MapDispatchToPropsType {
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
}

export type UsersProps = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Users);
