## stl
#### cpp
万用头文件
```cpp
#include<bits/stdc++.h>
using namespace std;
```
运算符重载
```cpp
// 把函数名换成 operator + 即可完成加法运算重载
Point operator + (const Point &p){
    return Point(x + p.x, y + p.y);
}
```
模板类
```cpp
//在类名后面写一个尖括号，里面是模板参数
map<int, string> x;
```
pair(对)
pair是一个结构体，包含两个成员，分别是first和second。两个模板参数分别标注两个成员的类型。其**重载**了比较符号，优先比较第一个元素，再比较第二个
```cpp
//赋值的两种方式
pair<int, int> a, b;
a = make_pair(4445, 4545)
b = {4445, 4545}
```
tuple(元组)
相当于多个元素的pair
```cpp
vector<int> nums = { 3,4,5 };
auto test = make_tuple(3.14,"wasd",nums);
cout << get<1>(test) << endl;//打印test第二个成员，其类型为string
int a; string b;
//解包, ignore占位
tie(a, b, ignore) = test2;
```
#### 算法
sort
传入区间第一个元素的地址和最后一个元素下一个位置的地址将区间进行升序排序,O(nlogn)
```cpp
//对vector<pair<int,int>>的第二个元素进行排序
bool cmp(const pair<int, int>& a, const pair<int, int>& b) {
    return a.second < b.second;
}
vector<pair<int, int>> v = \{\{1, 4\}, {2, 2}, {3, 5}, {4, 1}, {5, 3}\}
sort(v.begin(), v.end(), cmp);
//结果为\{\{4, 1\}, {2, 2}, {5, 3}, {1, 4}, {3, 5}\}
```
二分相关
传入一个区间和一个值, 假定最后一个元素的下一个位置是无穷大, **lower_bound**在指定区间内查找大于等于给定值的第一个位置, **upper_bound**在指定区间内查找大于给定值的第一个位置, O(log n)
找到返回该数字的地址, 不存在则返回end。通过返回的地址减去起始地址begin, 得到找到数字在数组中的下标
unique
去重，对于连续的相同元素，只保留一个。由于去重后元素数量会变少，unique函数会返回去重后新的区间结束位置，O(n)
```cpp
int a[10] = {1,1,2,3,3,5,3,3,4,1}
unique(a, a + 10);
//返回a + 7，变成1,2,3,5,3,4,1
//因此一般配合sort
```
reverse, min_element, max_element
反转区间、取区间最大最小值

next_permutation
生成指定区间的下一个排列，若不存在下一个排列则返回false
```cpp
int a[4]={1,2,3,4};
do{
	for(int i=0;i<4;i++)//打印排列 
		cout<<a[i]<<' ';
	cout<<endl;
}while(next_permutation(a,a+4));//获取下一个排列 
//输出：
1 2 3 4
1 2 4 3
1 3 2 4
...
```
#### 顺序容器
set
set 集合中元素有序且不重复
```cpp
set<int> s(a.begin(), a.end());
s.insert(1);
s.inset(first,second); //将区间插入(求并集)
s.erase(1);
s.erase(iterator);
erase(first,second) //删除区间，左闭右开
s.find(1); //查找元素位置，返回指针
s.count(1); //查找set中某个键值出现的次数。一个键值在set只可能出现0或1次。
pr = s.equal_range(3);
cout << *pr.first << endl; //第一个大于等于 3 的数
cout << *pr.second << endl; //第一个大于 3 的数
lower_bound(key_value) //返回第一个大于等于key_value的定位器
upper_bound(key_value) //返回最后一个大于等于key_value的定位器
```
map
```cpp
std::map<int, std::string> myMap;
myMap.insert(std::pair<int, std::string>(1, "Apple"));
myMap.insert(std::pair<int, std::string>(2, "Banana"));
myMap.insert(std::pair<int, std::string>(3, "Cherry"));
// 使用下标操作符访问特定键的值
std::cout << "Value at key 2: " << myMap[2] << std::endl;
// 查找特定键的值
auto it = myMap.find(3);
if (it != myMap.end()) {
  std::cout << "Value at key 3: " << it->second << std::endl;
}
// 遍历std::map中的键-值对
for (const auto& pair : myMap) {
  std::cout << pair.first << ": " << pair.second << std::endl;
}
//使用find中途遍历
cout << myMap.find(2)->second <<endl;
for (auto it = myMap.find(2); it != myMap.end(); ++it) {
std::cout << it->first << ": " << it->second << std::endl;
}
```
## 杂记
2023-8-18 0:49，怀着十分悲痛、绝望、不情愿的心情，我开始了cpp以及csp的学习。为了下学期的csp考试，更是为了考研。