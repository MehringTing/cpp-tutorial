export default class Card extends Element {
    render() {
        return <div class="card" styleset={__DIR__ + "../css/component.css#card"}>
            <div class="card-body">
                <div class="daily">根据您的音乐口味生成每日更新</div>
                <picture src="https://lqimg.dftoutiao.com/news/20230112/20230112075135_fd81a057e22d5f60dbbdec5d49e89c6f_1.jpeg" />
            </div>
            <p>2022超好听的网络流行歌曲</p>
       </div>
    }
}