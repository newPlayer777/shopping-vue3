import ErrMap  from "@axios/errMap"
//抛出提示框
const showTips = (title, message) => {
    ElNotification({
        title: title,
        message: message,
        type: 'error',
        showClose: false,
    })
}

const errorRes = (error) => {
    const res = error.response
    //判断状态码是否在ErrMap中
    if (ErrMap.hasOwnProperty(res.status)) {
        const { title, message } = ErrMap[res.status]
        showTips(title, message)
    }

    // if (res.status ) {
    //     const { title, message } = ErrMap[res.status]
    //     showTips(title, message)
    // }else{
    //     console.log('>>>>>>>>111');
    // }
}
export default errorRes