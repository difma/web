async function loadCSV() {
  try {
    // data 폴더의 CSV 파일 불러오기
    const response = await fetch('../data/test1.csv');
    const text = await response.text();
    const rows = text.trim().split('\n').slice(1); // 첫 줄은 헤더라서 제외

    const tbody = document.querySelector('#data-table tbody');
    rows.forEach(row => {
      const cols = row.split(',');
      const tr = document.createElement('tr');
      cols.forEach(col => {
        const td = document.createElement('td');
        td.textContent = col;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('CSV 파일을 불러오는 중 오류 발생:', error);
  }
}

loadCSV();
