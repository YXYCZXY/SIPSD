// VUE全局消息通讯
export const VueCommunication = function (Vue) {
  const Communication = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args);
      },
      on(event, callback) {
        this.$on(event, callback);
      },
      once(event, callback) {
        this.$once(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      }
    }
  });
  Vue.prototype.$communication = Communication;
};
