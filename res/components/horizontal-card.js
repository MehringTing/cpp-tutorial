export default class HorizontalCard extends Element {
    constructor(props, kids) {
        super();
        this.props = props;
    }

    render() {
        if (this.props.business === 'newest') {
            return <div class="horizontal-card" styleset={__DIR__ + "../css/component.css#newest-card"}>
                <picture src="https://lqimg.dftoutiao.com/news/20230112/20230112075135_fd81a057e22d5f60dbbdec5d49e89c6f_1.jpeg" />
                <div style="padding: 2dip 5dip 2dip 0;">
                    <p class="title">银河少年</p>
                    <div class="footer">
                        <div class="tags">
                            <span class="tag">Hi-Res</span>
                        </div>
                        <span class="author">王啸坤 / 薛之谦</span>
                    </div>
                </div>
            </div>;
        }

        return <div class="horizontal-card" styleset={__DIR__ + "../css/component.css#horizontal-card"}>
            <picture src="https://lqimg.dftoutiao.com/news/20230112/20230112075135_fd81a057e22d5f60dbbdec5d49e89c6f_1.jpeg" />
            <div style="padding: 2dip 5dip 2dip 0;">
                <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                <div class="tags">
                    <span class="tag">热点资讯</span>
                </div>
                <div class="info">
                    <span class="author">国际快报</span>
                    <span class="play-count">271</span>
                    <span class="duration">00:20</span>
                </div>
            </div>
        </div>;
    }
}