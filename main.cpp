#include <iostream>
// #include <string>

class B {
public:
    void static fun() { std::cout << "fun" << std::endl; }

private:
    int a;
    std::string b;
};

namespace A {
int fun() {
    std::cout << 'A' << std::endl;
    return 0;
}
}  // namespace A

int main() {
    int a;
    std::string b;
    char d;

    std::cout << "hello world." << std::endl;
    A::fun();
    // A a = new A;
    B::fun();

    for (int i = 0; i < 100; ++i) {
        a += i;
    }
    std::cout << "a is: " << a << std::endl;
    return 0;
}