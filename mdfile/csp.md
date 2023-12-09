## 遗漏错误
1. 输入size为1(特殊输入)
2. 因为输入特殊(如全相同)导致的自定义数组size为1(特殊输入)


## stl
### cpp
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
二维数组
```cpp
vector<vector<int> > array(m);
//初始化一个m*n的二维数组
for(int i=0;i<m;i++) 
    array[i].resize(n);
//遍历赋值
for(i = 0; i < array.size(); i++)
 　　for (j = 0; j < array[0].size();j++) 
        array[i][j] = (i+1)*(j+1); 
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
### 算法
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
### 顺序容器
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
//也可使用 myMap[1] = "Apple";
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
### 容器适配器
不支持迭代器。
stack 栈
```cpp
stack<T> s;
s.push(element);
s.pop();  // 弹出栈顶元素
T topElement = s.top();  // 获取栈顶元素的值
bool isEmpty = s.empty();  // 栈为空返回 true，否则返回 false
int stackSize = s.size();  // 获取栈中元素的个数
```
priority_queue 优先队列
```cpp
priority_queue<T, vector<T>, greater<T> > q; //小根堆
priority_queue<T, vector<T>, less<T> > q; //大根堆
q.front(); //队首
q.back(); //队尾
// 结构体重载只需要重载一个<号
```

## 动态规划
> 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
请你计算并返回达到楼梯顶部的最低花费。

```cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        vector<int> a(cost.size()+1);
        a[0] = 0;
        a[1] = 0;
        for(int i = 2; i < a.size(); i++)
            a[i] = min(a[i-1] + cost[i-1], a[i-2] + cost[i-2]);
        return a[a.size()-1];
    }
};
```
> 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。每次只能向下或者向右移动一步。
```cpp
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size(); int n = grid[0].size();
        for(int i=m-2;i>=0;i--) grid[i][n-1] += grid[i+1][n-1];
        for(int i=n-2;i>=0;i--) grid[m-1][i] += grid[m-1][i+1];
        for(int i=n-2;i>=0;i--) 
            for(int j = m-2;j>=0;j--)
                grid[j][i] += min(grid[j][i+1] , grid[j+1][i]);
        return grid[0][0];
    }
};
```
## python
### defaultdict & OrderedDict
设置一个默认值作为字典中新key的默认值，默认是None。
```python
from collections import defaultdict
data_dic = defaultdict("默认值")
```
用 OrderedDict 实现先进先出的队列
```python
from collections import OrderedDict


class FIFO(OrderedDict):
    def __init__(self, capacity):
        super().__init__()
        self.capacity = capacity

    def __setitem__(self, key, value):
        if len(self) >= self.capacity:  # 容量已满
            self.popitem(last=False)  # 删除最早的元素
        super().__setitem__(key, value)

q = FIFO(3)
q['a'] = 1
q['b'] = 2
q['c'] = 3
print(q)  # 输出：FIFO([('a', 1), ('b', 2), ('c', 3)])
q['d'] = 4
print(q)  # 输出：FIFO([('b', 2), ('c', 3), ('d', 4)])
# popitem()方法弹出最后插入的元素。参数last指定弹出最后还是第一个
print(ordered_dict.popitem()) 
print(ordered_dict.popitem(last=False))
```
ove_to_end()方法将OrderedDict中的某个元素移动到双向链表的尾或头，接受两个参数，是key指定移动的元素；last指定移动方向，为True移动到尾，为False移动到头

### Counter
- Counter类型可以接受一个可迭代对象作为参数，并对其中的元素进行计数。同时，还可以接受一个字典对象作为参数，用于初始化计数器。Counter可以相加减
```python
from collections import Counter

# 通过可迭代对象初始化计数器
c1 = Counter('hello')
print(c1)  # Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})

# 通过字典对象初始化计数器
c2 = Counter({'red': 4, 'blue': 2})
print(c2)  # Counter({'red': 4, 'blue': 2})
```
- elements()：返回一个迭代器，其中包含每个元素的重复次数。如果重复次数为0或负数，则不会返回该元素。
- most_common([n])：返回一个包含n个最常见元素及其计数的列表。如果n为空，则返回所有元素及其计数的列表。
- subtract([iterable-or-mapping])：从计数器中减去指定的元素或计数器。这个方法会修改计数器本身。
```python
from collections import Counter

c = Counter('hello')
print(list(c.elements()))  # ['h', 'e', 'l', 'l', 'o']

print(c.most_common(2))  # [('l', 2), ('h', 1)]

c.subtract('world')
print(c)  # Counter({'l': 1, 'h': 1, 'e': 1, 'o': 1, 'w': -1, 'r': -1, 'd': -1})

```

## 杂记
2023-8-18 0:49，怀着十分悲痛、绝望、不情愿的心情，我开始了cpp以及csp的学习。为了下学期的csp考试，更是为了考研。
2023-10-30 17:09，笑死，主意一改再改，还是不想学，已近两月未读。