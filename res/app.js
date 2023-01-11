import TitleBar from "./layouts/title-bar";
import SideMenu from "./layouts/side-menu";
import Welcome from "./welcome";
import FindAudio from "./views/find-audio";
import BoKe from "./views/bo-ke";
import Video from "./views/video";
import Follow from "./views/follow";
import Live from "./views/live";
import FM from "./views/fm";

const routes = {
    '发现音乐': <FindAudio />,
    '播客': <BoKe />,
    '视频': <Video />,
    '关注': <Follow />,
    '直播': <Live />,
    '私人FM': <FM />,
};

export default class App extends Element {
    routeView;
    
    constructor() {
        super();
    }

    componentDidMount() {
        // this.$('.side-menu').on('click', () => {
        //     console.log(arguments)
        // })

        console.log('component did mount', routes)
    }

    ['on click'](event) {
        console.log('菜单按下', event)
    }

    /**
     * 监听子组件自定义事件
     *
     * @param {*} event，事件对象，获取传递的参数 event.data
     * @param {*} target，发出事件的 DOM
     */
    ['on side-menu-click'](event, target) {
        console.log(event.data);
        this.componentUpdate({
            routeView: routes[event.data.name],
        });
    }

    render(h) {
        return <main>
            <TitleBar></TitleBar>
            <div class="container" style="height: calc(100% - 60dip);">
                <SideMenu />
                <div class="content" id="content">
                    {this.routeView}
                </div>
            </div>
        </main>
    }
}