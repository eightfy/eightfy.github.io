# Mathematical Logic
> 参考：赵希顺 《简明数理逻辑》

## 集合论

## 命题演算
At：所有原子命题符组成的集合
PF：所有合式公式组成的集合记作 PF
suppt(A)：$A\in PF$，suppt(A)表示所有在 A 中出现的原子命题符的集合
subf(A)：表示 A 的所有子公式组成的集合
$v\ 与\ \hat{v}$：赋值(At)和真值(PF)
### 语义
一般将逻辑连结词解释为相应的真值函数
引理：公式 A 的取值不受 suppt(A) 之外的取值的影响(归纳证明与或非蕴含)
  - A 为公式，v 为赋值，若$\hat{v}(A) = 1$，则称 v 满足 A
  - 若任意赋值都满足 A，则称 A 永真(重言式)
  - 若不存在满足 A 的赋值，则称 A 永假(不可满足)
  - 非永假则称可满足的

**代入**：$A[p_1/B_1,...,p_m/B_m]$表示把 A 中的 p(原子命题符) 换成 B(公式) 后得到的公式
 - 代入引理：设 A 是永真式，p 是 A 中的一个原子命题符，B 为公式，则$A[p/B]$也永真 

**语义后承(entailment)**：
- 设 $\Gamma$ 为一集公式，A 是公式， v是一赋值
  1. 若 v 满足 $\Gamma$ 中的每个公式， 则称 v 满足 $\Gamma$
  2. 称 $\Gamma$ 是可满足的，若存在满足 $\Gamma$ 的赋值
  3. 若满足 $\Gamma$ 的每个赋值都满足 A，则称 A 是 $\Gamma$ 的**语义后承**，记作 $\Gamma \models A$
  - 例：$A, (A\to B)\models B$

**紧致性定理**：
- 设 $\Gamma$ 为一集公式，若 $\Gamma$ 的每个有穷子集都是可满足的，则称 $\Gamma$ 是有穷可满足的
- 紧致性定理：设 $\Gamma$ 为一集公式，则 $\Gamma$ 是可满足的当且仅当 $\Gamma$ 是有穷可满足的
- 推论：设 $\Gamma$ 为一集公式，A 为一个公式。 $\Gamma\models A$ 当且仅当存在 $\Gamma$ 的有穷子集 $\Sigma$ 使得 $\Sigma\models A$ 

**等价 & 替换**

等价(充分必要)：$\leftrightarrow$
替换：若公式 A 是公式 C 中(多次出现)的子公式，则可特别指定 A 在 C 中从左到右第 i 次出现，记作 $C_A$，将该次出现的 A 替换为 B 则记作 $C_B$
- **替换定理**：
  1. $(A\leftrightarrow B)\models (C_A\leftrightarrow C_B)$。
  2. 若$A\leftrightarrow B$是重言式，则$C_A\leftrightarrow C_B$也是。
- **联结词个数定理**：
  对任意公式 C，都存在一个公式 D 使得$\models(C\leftrightarrow D)$且 D 中出现的联结词属于${\neg, \land}$ or ${\neg, \lor}$ or ${\neg, \to}$

### 公理及推理规则
**公理**:
均为公理模式，替换公式可以产生无数公理
  1. $A\to(B\to A)$                           （后件确定）
  2. $(A\to(B\to C))\to((A\to B)\to(A\to C))$ （隐含分配）
  3. $(\neg A\to\neg B)\to(B\to A)$           （前后换位）

${\to，\neg}$ 是一个连接符的完备集。公理是有效的命题形式，可有不同的公理系统，不同的连接符完备集有不同的公理
**推理规则（分离规则 MP）**: $\frac{A, A\to B}{B}$
若$A, A\to B$，则$B$，即$B$是$A, A\to B$的直接后承（推论，推论是前提的直接后承）

### 形式证明及形式定理
**定义：形式证明**
称公式的有穷序列$A_1, A_2, ..., A_n$是一个*形式证明*，如果对任意$i$，$1\leq i \geq n$，都有下列之一成立：
  1. $A_i$ 是公理，或
  2. 存在$j_1, j_2 < i$使得$A_i$是$A_{j_1}$和$A_{j_2}$关于分离规则的直接后承。

\*形式定理的长度是该证明所含公式的个数
**定义：形式定理**
称公式$A$是一个*形式定理*，如果存在一个形式证明$A_1, A_2, ..., A_n$使得$A = A_n$，此时称A是形式可证的。

### 形式推演
**定义：形式推演**
设$\Gamma$是一些公式组成的集合。称公式序列$A_1, A_2, ..., A_n$是从$\Gamma$中的公式出发的*形式推演*，如果对任意$i$，$1\leq i \geq n$，都有下列之一成立：
  1. $A_i\in \Gamma$ ，或
  2. $A_i$ 是公理，或
  3. 存在$j_1, j_2 < i$使得$A_i$是$A_{j_1}$和$A_{j_2}$关于分离规则的直接后承。

如果存在从$\Gamma$中的公式出发的形式推演使得$A$是该推演的最后一个公式，则称$A$可由$\Gamma$推出，记作$\Gamma\vdash A$
引理：设$\Gamma, \Delta$为公式的集合，$A, B$为公式，则
  1. $A\vdash A$
  2. 若$\Delta\vdash A$且$\Delta\in\Gamma$，则$\Gamma\vdash A$
  3. 若$\Delta\vdash B$且$\Gamma, B\vdash A$，则$\Gamma, \Delta\vdash A$

### 斜式推演
### 推演定理
定义 推演定理：若$\Gamma, A\vdash B$，则$\Gamma\vdash(A\to B)$

### 导出规则及辅助推演规则
定理 导出规则及辅助推演规则：设 A，B，C 为公式，$\Gamma$为一集公式。
  - 蕴含引入规则（$\to +$）：若$\Gamma, A\vdash B$，则$\Gamma\vdash A\to B$
  - 蕴含消去规则（$\to -$）：$A, A\to B\vdash B$
  - 合取引入规则（$\land +$）：$A, B\vdash A\land B$
  - 合取消去规则（$\land -$）：$A\land B\vdash A, A\land B\vdash B$
  - 析取引入规则（$\lor +$）：$A\vdash A\lor B, B\vdash A\lor B$
  - 析取消去规则（$\lor -$）：若$\Gamma, A\vdash C$且$\Gamma, B\vdash C$，则$\Gamma, A\lor B\vdash C$
  - 否定引入规则（归谬法）（$\neg +$）：若$\Gamma, A\vdash B$且$\Gamma, A\vdash \neg B$，则$\Gamma\vdash \neg A$
  - 否定消去规则（$\neg -$）：$\neg\neg A\vdash A$
  - 反证法：若$\Gamma, \neg A\vdash B$且$\Gamma, \neg A\vdash\neg B$，则$\Gamma\vdash A$

### 可靠性定理
引理：命题演算中的每一公理都是永真的
**可靠性定理**：命题演算中，形式定理都是永真的（$\Gamma \vdash A \Rightarrow \Gamma \models A$）
定义（协调）：设$\Sigma$为若干公式组成的集合，若存在公式$A$使得$\Sigma\vdash A$且$\Sigma\vdash\neg A$，则称$\Sigma$是不协调的；否则，称$\Sigma$是协调的。
引理：$\emptyset$是协调的。即命题演算是协调的
引理：设$\Gamma$为若干公式的集合，则$\Gamma$协调当且仅当存在公式$A$使得$\Gamma\not\vdash A$。
引理：设$\Sigma$为若干公式组成的集合，$A$为一个公式。若$\Sigma\not\vdash A$，则$\Sigma\cup\{\neg A\}$是协调的。
引理：设$\Gamma$为若干公式的集合，若$\Gamma$是可满足的，则$\Gamma$协调。
\**协调性是一个语法概念，可满足性是一个语义概念*

### 范式与完全性定理
定义：文字、范式（paradigm）
  1. 原子命题符及其否定统称为**文字**（正文字，否定：负文字）。设$p$为一原子命题符，称$p$和$\neg p$为一对互补文字。
  2. 有穷多个文字的析取称为**析取子句**，有穷多个文字的合取称为**合取子句**。（可为一个）
  3. 有穷多个析取子句的合取称为**合取范式**
  4. 有穷多个合取子句的析取称为**析取范式**

范式定理：设$A$为命题演算中的任意公式。
  1. 存在合取范式$B$使得$A\vdash\dashv B$
  2. 存在析取范式$F$使得$A\vdash\dashv F$

引理：一合取范式是永**真**的当且仅当每个析取子句中含有一对互补文字，一析取范式是永**假**的当且仅当每个合取子句中含有一对互补文字。
**（弱）完全性定理 1**：命题演算中，永真公式都是形式定理，即是可证的。（$\Gamma \vdash A \Leftarrow \Gamma \models A$）
**（强）完全性定理 2**：设$\Gamma$为一集公式，$A$为公式。若$\Gamma\models A$则$\Gamma\vdash A$
**完全性定理 3**：设$\Gamma$为一集公式。$\Gamma$协调当且仅当$\Gamma$可满足。
\**由弱完全性证明强完全性时需要紧致性定理*
定理：设$A$为命题公式，其中原子命题符为$p_1, ..., p_n$，令
$\Sigma_A = \{B|$存在公式$A_1, ..., A_n$使得$B$为$A[p_1/A_1, ..., p_n/A_n]\}$。
假设$A$不是形式定理，则$\Sigma_A$是不协调的。
\**该定理指的是若 A 不是重言式，那么把 A 作为公理模式加入命题演算中会破坏协调性*
**联结词完全性**：任何一个布尔函数都可表示为一个命题公式。

## 谓词演算

## 可计算性理论

## 哥德尔不完全性定理

## 模型论