# 微积分一
## 函数与极限
### 数列极限
定义：设{$x_n$}为一数列，若存在常数 a，对于任意给定的正数$\epsilon$，总存在正整数 N，使得当$n > N$时，不等式$|x_n-a| < \epsilon$都成立，那么就称常数 a 是数列{$x_n$}的极限，数列{$x_n$}收敛于 a，记为$\lim_{n\rightarrow\infty}x_n = a$ 或 $x_n\rightarrow a(n\rightarrow\infty)$

定理：
1. （唯一性）收敛数列极限唯一
2. （有界性）收敛数列一定有界
3. （保号性）若$\lim_{n\rightarrow\infty}x_n = a$且$a>0$（$a<0$），那么存在正整数 N，当$n > N$时，都有$x_n>0$（$x_n<0$）

### 函数极限
定义：
1. 设函数 f(x) 在点$x_0$的某一去心邻域内有定义，若存在常数 A，对于任意给定的正数$\epsilon$，总存在正整数$\delta$，使得当 x 满足$0<|x-x_0|<\delta$时，f(x) 满足不等式$|f(x)-A| < \epsilon$，那么就称常数 A 是函数 f(x) 当$x\rightarrow x_0$时的极限，记为$\lim_{x\rightarrow x_0}f(x) = A$ 或 $f(x)\rightarrow A(x\rightarrow x_0)$
2. 设函数 f(x) 在$|x|$大于某一正数时有定义，若存在常数 A，对于任意给定的正数$\epsilon$，总存在正整数$X$，使得当 x 满足$|x|>X$时，f(x) 满足不等式$|f(x)-A| < \epsilon$，那么就称常数 A 是函数 f(x) 当$x\rightarrow \infty$时的极限

定理：
1. （唯一性）
2. （局部有界性）
3. （局部保号性）
4. （数列极限于函数极限的联系）数列收敛，函数值数列也收敛

### 极限存在准则
1. （夹逼定理）
2. 单调有界数列（函数）必有极限
3. （柯西极限存在准则）数列{$x_n$}收敛的充分必要条件是：对于任意给定的正数$\epsilon$，存在正整数$N$，使得当$m>N, n>N$时，有$|x_n-x_m|<\epsilon$

### 两个重要极限
$$\lim_{x\rightarrow 0}\frac{sin\ x}{x} = 1$$
$$\lim_{x\rightarrow \infty}(1+\frac{1}{x})^x = e$$

### 无穷小
定理：
1. f(x)有极限 A 的充分必要条件是$f(x) = A + \alpha$，其中$\alpha$是无穷小
2. 在自变量的同一变化过程中，无穷小和无穷大互为倒数

**等价无穷小：**

## 导数与微分
### 导数运算法则
1. 乘除
$$[g \cdot h]' = g' \cdot h + g \cdot h'$$
$$[\frac{g}{h}]' = \frac{g' \cdot h - g \cdot h'}{h^2}, h \neq 0$$
2. 反函数的导数等于原函数导数的倒数
3. 复合函数链式法则$(y=f[g(x)])$
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### 导数公式
- 指数函数
  - $\frac{d}{dx}(a^x) = a^x \ln a$
- 对数函数
  - $\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$
- 三角函数
  - $\frac{d}{dx}(\sin x) = \cos x$
  - $\frac{d}{dx}(\cos x) = -\sin x$
  - $\frac{d}{dx}(\tan x) = \sec^2 x$
- 反三角函数
  - $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}$
  - $\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}$
  - $\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}$


## 微分中值定理

## 不定积分

## 定积分

## 微分方程

## 