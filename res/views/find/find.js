import Card from "../../components/card";


/**
 * 发现音乐
 */
export default class Find extends Element {
    constructor() {
        super();
    }

    render() {
        return <div>
                <ul class="tabs v-tabs">
                <li class="tab active">个性推荐</li>
                <li class="tab">专属订制</li>
                <li class="tab">歌单</li>
                <li class="tab">排行榜</li>
                <li class="tab">歌手</li>
                <li class="tab">最新音乐</li>
            </ul>
            <div style="border: 1px solid red; margin: 20dip;">轮播图</div>
            <div class="grouped-list recommend">
                <div class="name">推荐歌单</div>
                <div class="list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div class="grouped-list rmbk">
                <div class="name">热门播客</div>
                <ul>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">英国首相称政府愿意就护士薪酬问题进行对话</p>
                            <div>
                                <span class="tag">热点资讯</span>
                            </div>
                            <div>
                                <span class="author">国际快报</span>
                                <span class="play-count">271</span>
                                <span class="duration">00:20</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="grouped-list djfs">
                <div class="name">独家放送</div>
                <ul>
                    <li>
                        <div class="image">
                            <img src="../images/1.jpeg" alt="" />
                            <div class="play">播放</div>
                        </div>
                        <p>2022超好听的网络流行歌曲</p>
                    </li>
                    <li>
                        <div class="image">
                            <img src="../images/1.jpeg" alt="" />
                            <div class="play">播放</div>
                        </div>
                        <p>2022超好听的网络流行歌曲</p>
                    </li>
                    <li>
                        <div class="image">
                            <img src="../images/1.jpeg" alt="" />
                            <div class="play">播放</div>
                        </div>
                        <p>2022超好听的网络流行歌曲</p>
                    </li>
                </ul>
            </div>
            <div class="grouped-list newest">
                <div class="name">最新音乐</div>
                <ul>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../images/1.jpeg" alt="" />
                        <div>
                            <p class="title">银河少年</p>
                            <div class="footer">
                                <div class="tags">
                                    <span class="tag">Hi-Res</span>
                                </div>
                                <span class="author">王啸坤 / 薛之谦</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="grouped-list ztbk">
                <div class="name">主题播客</div>
                <ul>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../images/1.jpeg" alt="" />
                            <div class="mask">
                                <p>音乐推荐</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}