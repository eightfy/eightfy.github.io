async function saveContent() {
    try {
      let token = `token `;
      token += document.getElementById("token").value;
      // 获取GitHub仓库的API根据URL
      const url = `https://api.github.com/repositories/590278809/contents/mdfile/log.md?ref=main`;
      //const urltest = `https://api.github.com/repos/eightfy/eightfy.github.io/contents/mdfile/log.md?ref=test`;
      
      // 获取文件的SHA值
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      const shaResponse = await fetch(url, {
        headers: {
          'Authorization': token,  // 替换为您自己的访问令牌
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      const shaData = await shaResponse.json();
      const sha = shaData.sha;
      const contentBytes = Uint8Array.from(atob(shaData.content), c => c.charCodeAt(0));
      const textDecoder = new TextDecoder();
      const contentStr = textDecoder.decode(contentBytes);
      // 更新文件
      const message = `Add new content on ${year}-${month}-${day}`;
      //获得时间
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short',
        timeZone: 'Asia/Shanghai',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const currentDate = new Date();
      const formattedDate = formatter.format(currentDate).replace(/\//g, '-');
      console.log(formattedDate);
      
      //组合字符串      
      const content = `${formattedDate}\n\n> ${document.getElementById("content").value}\n\n${contentStr}`;
      const textEncoder = new TextEncoder();
      const encodedContent = textEncoder.encode(content);
      const base64Content = btoa(String.fromCharCode(...new Uint8Array(encodedContent)));
      console.log(encodedContent);
      console.log(sha);
      const data = {
        message: message,
        content: base64Content,
        sha: sha
      };
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': token,  // 替换为您自己的访问令牌
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify(data)
      });
      const newData = await response.json();
      console.log(newData);
      if (response.ok) {
        // 请求成功，显示成功消息
        const successMsg = document.createElement('p');
        successMsg.textContent = '发送成功！';
        const targetElement = document.querySelector('#success-container');
        targetElement.appendChild(successMsg);
    }
    } catch (error) {
      console.error(error);
    }
  }
