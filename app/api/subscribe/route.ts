import { NextResponse } from 'next/server';

type SubscribeBody = { email?: string };

async function subscribeMailchimp(email: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const dc = process.env.MAILCHIMP_DC;

  if (!apiKey || !audienceId || !dc) return false;

  const response = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed'
    })
  });

  return response.ok;
}

async function subscribeConvertKit(email: string) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) return false;

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: apiKey, email })
  });

  return response.ok;
}

export async function POST(request: Request) {
  const body = (await request.json()) as SubscribeBody;

  if (!body.email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const provider = process.env.MAIL_PROVIDER ?? 'mailchimp';
  const success = provider === 'convertkit' ? await subscribeConvertKit(body.email) : await subscribeMailchimp(body.email);

  if (!success) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
