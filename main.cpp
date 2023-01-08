#include "sciter-x-window.hpp"
#include "sciter-win-main.cpp"


class frame : public sciter::window {
public:
    // SW_TITLEBAR
    // SW_RESIZEABLE �ɵ������ڴ�С���Ƴ��󴰿��޷�������С���һ�������С������󻯰�ť
    // SW_CONTROLS ��С������󻯡��رհ�ť
    // SW_MAIN
    // SW_ENABLE_DEBUG
    // SW_GLASSY
    frame() : window( SW_TITLEBAR | SW_CONTROLS | SW_RESIZEABLE  | SW_ENABLE_DEBUG | SW_GLASSY) {}
};

#include "resources.cpp"

int uimain(std::function<int()> run) {
    std::cout << GetSystemMetrics(SM_CXFULLSCREEN) << GetSystemMetrics(SM_CYFULLSCREEN) << std::endl;

    sciter::archive::instance().open(aux::elements_of(resources));
    sciter::om::hasset<frame> pwin = new frame();

    pwin->load(WSTR("this://app/index.htm"));
    pwin->expand();

    return run();
}
