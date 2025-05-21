export async function getAIRepsonse(message: string): Promise<string> {
  const response = await fetch("http://10.8.0.2:1234/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "nous-hermes-q8/nou", /* Название вашей модели/(eng: Name of your model) */
      messages: [
        { role: "system", content: "Ты дружелюбный помощник." },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка от LM Studio: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
