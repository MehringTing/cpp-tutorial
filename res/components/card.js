export default class Card extends Element {
    render() {
        return <div class="card" style="../css/component.css#card">
            <div class="image">
                <div class="daily">根据您的音乐口味生成每日更新</div>
                <picture src="../images/1.jpeg" alt="" />
            </div>
            <p>2022超好听的网络流行歌曲</p>
       </div>
    }
}