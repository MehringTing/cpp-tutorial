export default class Card extends Element {
    business;

    constructor(props, kids) {
        console.log('props:',props)
        super();
        this.props = props;
        this.business = props.business;
    }

    render() {
        if (this.props.business === 'exclusive') {
            return <div class="card" styleset={__DIR__ + "../css/component.css#exclusive-card"}>
                <div class="card-body">
                    <div class="play-count">
                        <i></i>136万
                    </div>
                    <div class="daily" style="padding: 5dip">根据您的音乐口味生成每日更新</div>
                    <picture src="https://lqimg.dftoutiao.com/news/20230112/20230112075135_fd81a057e22d5f60dbbdec5d49e89c6f_1.jpeg" />
                    <div class="play">播放</div>
                </div>
                <p style="padding-top: 8dip;">2022超好听的网络流行歌曲</p>
            </div>;
        }

        return <div class="card" styleset={__DIR__ + "../css/component.css#card"}>
            <div class="card-body">
                <div class="play-count">
                    <i></i>{parseInt(this.props.data.playCount / 10000, 10)}万
                </div>
                <div class="daily" style="padding: 5dip">根据您的音乐口味生成每日更新</div>
                <picture src={this.props.data.picUrl} />
                <div class="play">播放</div>
            </div>
            <p style="padding-top: 8dip;">{this.props.data.name}</p>
       </div>;
    }
}