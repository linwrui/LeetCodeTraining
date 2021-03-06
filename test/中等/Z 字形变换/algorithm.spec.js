/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    const matrix = [];
    const zeroBaseRows = numRows - 1;
    let fixRow = 0;
    let fixColumn = 0;
    let moveDirection = "down"; // 移动方向，当向下移动时fixRow递增到zeroBaseRows，同时fixColumn保持不变，当向上移动时fixRow递减到0，同时fixColumn递增
    if (zeroBaseRows === 0) return s;
    for (let i = 0; i < s.length; i++) {
        if (matrix[fixRow] == null) {
            matrix[fixRow] = [];
        }
        matrix[fixRow][fixColumn] = s[i];
        switch (moveDirection) {
            case "down":
                if (fixRow === zeroBaseRows) {
                    fixRow = zeroBaseRows - 1;
                    fixColumn++;
                    moveDirection = "up";
                } else {
                    fixRow++;
                }
                break;
            case "up":
                if (fixRow === 0) {
                    fixRow++;
                    moveDirection = "down";
                } else {
                    fixRow--;
                    fixColumn++;
                }
                break;
        }
    }
    let result = "";
    for (const numRow of matrix) {
        result += numRow.filter(x => x != null).join("");
    }
    return result;
};
test("test1", () => {
    expect(convert("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
});
test("test2", () => {
    expect(convert("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
});
test("test3", () => {
    expect(convert("LE", 1)).toBe("LE");
});
test("test4", () => {
    expect(convert("E", 1)).toBe("E");
});
test("test5", () => {
    expect(convert("LEETCODEISHIRING", 1)).toBe("LEETCODEISHIRING");
});
test("test6", () => {
    expect(convert("LEETCODEISHIRING", 2)).toBe("LECDIHRNETOESIIG");
});
