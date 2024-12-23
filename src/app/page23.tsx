// import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

// const client = new DynamoDBClient({ region: "us-east-1" }); // 適切なリージョンを設定

// export default function Page2() {
//   try {
//     const params = {
//       TableName: "barSample", // DynamoDBのテーブル名を指定
//     };

//     const command = new ScanCommand(params);
//     const data = await client.send(command);

//     // データの整形
//     const items = data.Items.map((item) => ({
//       date: item.date.S, // DynamoDBの文字列型（S）
//       value: Number(item.value.N), // DynamoDBの数値型（N）
//     }));

//     // JSONレスポンスとして返却
//     return new Response(JSON.stringify(items), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("DynamoDB Fetch Error: ", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch data from DynamoDB" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
