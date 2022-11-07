const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Generates an expected output given the input 'blah'", () => {
    const trivialKey = deterministicPartitionKey("blah");
    expect(trivialKey).toBe("12bf876d8ee0ec0f8cda8321bbeec152acd5cbb26d3b24238692d3584d5350a1a5f5ca46b94f58bf60e34fafd1f50dbf382828cbadd763a5e30819ded6e8e940");
  });

  it("Returns '0' when given a null input", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns '1234' when an object with a partitionKey of '1234' is input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1234" });
    expect(trivialKey).toBe("1234");
  });


  it("Returns stringified object when an object with a partitionKey of {foo: 0} is input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: { foo: 0 } });
    expect(trivialKey).toBe("{\"foo\":0}");
  });

  it("Returns expected output when given a partition key over the max length", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 'a'.repeat(500) });
    expect(trivialKey).toBe("8d1cec1a0beb9a0b3484b095e5ea224890472d4a8af92576edfdb28f1e39afcef1ea351014633091ed6f23b4d42bc28833dca04f9395020b3a08733d8c700d3c");
  });
});
