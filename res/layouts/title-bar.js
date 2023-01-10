export default class TitleBar extends Element {
    // constructor() {
    //     super();
    // }

    ['on click'](event) {
        console.log('listen on title bar', event)
    }

    ['on side-menu-click'](event) {
        console.log('on side menu click2')
    }

    ['on click at [role="window-minimize"]'](event) {
        Window.this.close();
    }

    ['on click at [role="window-close"]'](event) {
        Window.this.close();
    }
    
    ['on click at [role="window-close"]'](event) {
        Window.this.close();
    }

    render() {
        return <div class="title-bar" role="window-caption">
            <div class="title">Tutorial</div>
            <div class="main content">ss</div>
            <div class="win-action-group" role="window-buttons">
                <div class="action" role="window-minimize">_</div>
                <div class="action" role="window-maximize">[]</div>
                <div class="action" role="window-close">
                    <img src="./images/win-close.svg" style="width: 20dip" />
                </div>
            </div>
        </div>;
    }
}
