// fetchData.js

const url = 'https://script.google.com/macros/s/AKfycbxcvbRgMvXLs12Ij4kVlkYQZ8WM2Ahi6KkohqyG-P-YIpl0Cf0pj9ow369LU_c-rYDIow/exec';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // 如果返回的是文本，使用 text()
        // 如果返回的是 JSON，使用 response.json()
    })
    .then(data => {
        console.log(data); // 在控制台输出返回的数据
        // 这里可以处理返回的数据，例如更新 UI
    })
    .catch(error => {
        console.error('Error:', error);
    });
