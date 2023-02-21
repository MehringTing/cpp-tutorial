import Card from "../../components/card";
import HorizontalCard from "../../components/horizontal-card";
import PodcastCard from "../../components/podcast-card";


/**
 * 发现音乐
 */
export default class Find extends Element {
    arr = [];
    a;
    constructor() {
        super();
        console.log('find contructor')
    }

    async getArr() {
        const resp = await fetch('http://localhost:3000/personalized?limit=10')
        console.log(resp);
        console.log(resp.ok)
        console.log(resp.json())
        if (resp.ok) {
            const data = await resp.json();
            this.arr = data.result;

            const a = this.arr.map((item) => {
                return <Card data={item} />
            });

            this.componentUpdate({a: a});
        }
    }

    render() {
        this.getArr();
        // console.log('this.arr:', this.arr)
        // const a = this.arr.map((item) => {
        //     console.log('item:', item)
        //     return <Card data={item} />
        // });
        return <div>
                <ul class="tabs v-tabs">
                <li class="tab active">个性推荐</li>
                <li class="tab">专属订制</li>
                <li class="tab">歌单</li>
                <li class="tab">排行榜</li>
                <li class="tab">歌手</li>
                <li class="tab">最新音乐</li>
            </ul>
            <div style="border: 1px solid red; margin: 20dip;padding: 3px 9px">轮播图</div>
            <div class="grouped-list recommend">
                <div class="name" style="padding-bottom: 10dip;">推荐歌单</div>
                <div class="list">
                    {this.a}
                </div>
            </div>

            <div class="grouped-list hot-boke">
                <div class="name" style="padding-top: 40dip;">热门播客</div>
                <div class="list">
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                </div>
            </div>
            <div class="grouped-list exclusive">
                <div class="name" style="padding-top: 40dip;">独家放送</div>

            </div>
            <div class="grouped-list newest">
                <div class="name" style="padding-top: 40dip;">最新音乐</div>
                <div class="list">
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                    <HorizontalCard business="newest" />
                </div>
            </div>
            <div class="grouped-list podcasts">
                <div class="name" style="padding-top: 40dip; padding-bottom: 40dip;">主题播客</div>
                <div class="list">
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                </div>
            </div>
        </div>
    }
}