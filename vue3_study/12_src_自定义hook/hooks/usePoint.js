import { reactive, onMounted, onBeforeUnmount } from 'vue';

export default function () {
  // 数据
  let point = reactive({
    x: 0,
    y: 0,
  });

  let pointList = reactive([]);

  // 方法
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    pointList.push({ x: event.pageX, y: event.pageY });
  }

  // 钩子
  onMounted(() => {
    window.addEventListener('mousemove', savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', savePoint);
  });

  return { pointList, point };
}
