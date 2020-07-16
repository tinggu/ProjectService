export default {
  state:{
    isFreshRepairsWorkOrderPage: true,
    repairsWorkOrderMsg: '',
    completeRoomList: [],
    isCompleteRepairsWorkOrderPhotoList: []
  },
  getters:{
    isFreshRepairsWorkOrderPage: state => state.isFreshRepairsWorkOrderPage,
    repairsWorkOrderMsg: state => state.repairsWorkOrderMsg,
    completeRoomList: state => state.completeRoomList,
    isCompleteRepairsWorkOrderPhotoList: state => state.isCompleteRepairsWorkOrderPhotoList
  },
  mutations:{
    // 改变是否刷新任务首页的状态
    changeIsFreshRepairsWorkOrderPage (state, playLoad) {
      state.isFreshRepairsWorkOrderPage = playLoad
    },
    // 改变任务信息的状态
    changeRepairsWorkOrderMsg (state, playLoad) {
      state.repairsWorkOrderMsg = playLoad
    },
    // 改变完成房间检修的状态
    changeCompleteRoomList (state, playLoad) {
      state.completeRoomList = playLoad
    },
    // 改变已完成上传图片的状态
    changeIsCompletePhotoList (state, playLoad) {
      state.isCompleteRepairsWorkOrderPhotoList = playLoad
    },
  },
  actions:{}
}