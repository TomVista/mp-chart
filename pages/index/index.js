/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        keyboardHeight: 0,
        currentRecord: 1,
        value: '',
        record: [{ name: 'A', type: 'other', text: '你好,我是xx', time: '20:18' }, { name: 'X', type: 'self', text: '添加好友成功', time: '20:18' },]
    },
    onInput(event) {
        this.setData({
            value: event.detail.value
        })
    },
    onFocus(event) {
        this.setData({
            keyboardHeight: event.detail.height
        })
    },
    onBLur() {
        this.setData({
            keyboardHeight: 0
        })
    },
    type: 0,
    onConfirm(event) {
        this.say(event.detail.value)
    },
    say(value) {
        if (!value) {
            return
        }
        this.type += 1
        const record = this.data.record.concat([{
            name: 'S',
            type: (this.type & 1) ? 'self' : 'other',
            text: value
        }])
        this.setData({
            value: '',
            record,
            currentRecord: record.length - 1
        })
    },
    push() {
        this.say(this.data.value)
    }
})
