export default class SideMenu extends Element {
    ["on click at li.menu-item"](event, target) {
        console.log(event)
        // console.log(target.attributes['class']) // 获取元素的class类名，eg.: menu-item active
        // console.log('text:', target.innerText);
        // console.log('innerHTML:', target.innerHTML);
        // console.log('outerHTML:', target.outerHTML);
        // const routeName = hyperlink.attributes["href"].substr(6);
        // return this.navigateTo(routeName);
        
        const name = target.innerText;
        this.post(new Event('side-menu-click', {
            data: {
                name,
            },
            bubbles: true,
        }));
    }

    render(h) {
        return <div class="side-menu">
            <ul class="menus">
                <li class="menu-item active">发现音乐</li>
                <li class="menu-item">播客</li>
                <li class="menu-item">视频</li>
                <li class="menu-item">关注</li>
                <li class="menu-item">直播</li>
                <li class="menu-item">私人FM</li>
                <li class="menu-group">
                    <div class="group-name">我的音乐</div>
                    <ul class="menus">
                        <li class="menu-item">我喜欢的音乐</li>
                        <li class="menu-item">本地与下载</li>
                        <li class="menu-item">最近播放</li>
                    </ul>
                </li>
                <li class="menu-group">
                    <div class="group-name">创建的歌单</div>
                    <ul class="menus">
                        <li class="menu-item">流行</li>
                        <li class="menu-item">纯音乐</li>
                        <li class="menu-item">古典</li>
                    </ul>
                </li>
            </ul>
        </div>;
    }
}