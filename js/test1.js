async function loadCSV() {
  try {
    // index.html이 main에 있으므로 data 폴더는 바로 하위
    const response = await fetch('data/test1.csv');
    console.log("응답 상태:", response.status);

    if (!response.ok) {
      throw new Error("CSV 파일을 찾을 수 없습니다.");
    }

    const text = await response.text();
    const rows = text.trim().split('\n').slice(1); // 첫 줄은 헤더 제외

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
