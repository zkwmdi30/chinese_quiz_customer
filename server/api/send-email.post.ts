import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const { email, message } = body;

    // 이메일 설정
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail 사용
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });

    // 이메일 옵션
    const mailOptions = {
      from: config.emailUser,
      to: config.adminEmail,
      subject: "고객 문의사항",
      text: `
        보낸 사람: ${email}
        메시지: ${message}
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return { success: true, message: "이메일이 성공적으로 전송되었습니다." };
  } catch (error) {
    console.error("이메일 전송 실패:", error);
    throw createError({
      statusCode: 500,
      message: "이메일 전송에 실패했습니다.",
    });
  }
});
