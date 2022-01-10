export class Message {
  From?: Mailer;
  To?: Mailer[];
  Subject?: string;
  TextPart?: string;
  HTMLPart?: string;
}

export class Mailer {
  Email?: string;
  Name?: string;
}
