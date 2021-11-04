import { connect } from "react-redux";
import { RootState } from "../../store";
import Player from "./Player";

const mapState = (state: RootState) => ({
    url: state.mainStore.url,
})

export default connect(mapState)(Player);