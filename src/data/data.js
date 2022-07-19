const data_table = {
  head: [
    ["id", "number"],
    ["Имя", "string"],
    ["Фамилия", "string"],
    ["Возраст", "number"],
    ["Должность", "string"],
  ],
  items: [
    [1, "Donna", "Craig", 21, "frontend-mobile developer"],
    [5, "Lloyd", "Rodriguez", 20, "frontend developer"],
    [2, "Kenneth", "Rice", 23, "backend developer"],
    [6, "Glenn", "Perkins", 18, "backend developer"],
    [4, "Aaron", "Moreno", 31, "SEO specialist"],
    [7, "Donna", "Ellis", 25, "HR manager"],
    [3, "David", "Freeman", 27, "Project manager"],
  ],
};

export default JSON.stringify(data_table);
