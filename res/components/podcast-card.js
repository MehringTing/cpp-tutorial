export default class PodcastCard extends Element {

    render() {
        return <div class="podcast" styleset={__DIR__ + "../css/component.css#podcast-card"}>
            <div>
                <picture src="https://lqimg.dftoutiao.com/news/20230112/20230112075135_fd81a057e22d5f60dbbdec5d49e89c6f_1.jpeg" />
                <div class="mask">
                    <p>音乐推荐</p>
                </div>
            </div>
        </div>;
    }
}