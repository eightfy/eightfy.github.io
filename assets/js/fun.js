async function saveContent() {
    try {
      // 获取GitHub仓库的API根据URL
      const url = `https://api.github.com/repositories/590278809/contents/mdfile/log.md`;
      const baseUrlResponse = await fetch(url, {
        headers: {
          'Authorization': `token ${secrets.ACCESS_TOKEN}`,  // 替换为您自己的访问令牌
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      const baseUrlData = await baseUrlResponse.json();
      const baseApiUrl = baseUrlData.url;
  
      // 获取文件的SHA值
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      const shaResponse = await fetch(url, {
        headers: {
          'Authorization': `token ${secrets.ACCESS_TOKEN}`,  // 替换为您自己的访问令牌
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      const shaData = await shaResponse.json();
      const sha = shaData.sha;
      const contentStr = atob(shaData.content);
  
      // 更新文件
      const message = `Add new content on ${year}-${month}-${day}`;
      const content = `${year}-${month}-${day}` + `\n\n> ` + document.getElementById("content").value + `\n\n` + contentStr;
      const data = {
        message: message,
        content: btoa(content),
        sha: sha
      };
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${secrets.ACCESS_TOKEN}`,  // 替换为您自己的访问令牌
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(data)
      });
      const newData = await response.json();
      console.log(newData);
    } catch (error) {
      console.error(error);
    }
  }
  
  const files = [
    '../mdfile/log.md',
  ];
  const getContent = async (file) => {
    const response = await fetch(file);
    const text = await response.text();
    return text;
  };
  const renderContent = async () => {
    let htmlText = '';
    for (const file of files) {
      const markdownText = await getContent(file);
      const md = window.markdownit({
        html: true, // 允许渲染 HTML 标记
        breaks: true, // 允许行内换行符
        linkify: true, // 将 URL 自动转换为链接
        typographer: true, // 将普通的引号转换为弯引号等
        quotes: '“”‘’',
      });
      const renderedMarkdown = md.render(markdownText);
      htmlText += renderedMarkdown;
    }
    document.getElementById('content').innerHTML = htmlText;
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]); // 手动渲染数学公式
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
      hljs.lineNumbersBlock(block);
    });
  };