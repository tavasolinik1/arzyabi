import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { id: true, name: true, email: true } } },
    });
    return NextResponse.json({ tasks });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, status = 'TODO', userId } = body ?? {};

    if (!title || !description) {
      return NextResponse.json({ error: 'Missing title or description' }, { status: 400 });
    }

    // For demo: attach to an existing user or create a placeholder user
    let resolvedUserId = userId as string | undefined;
    if (!resolvedUserId) {
      const existing = await prisma.user.findFirst();
      if (existing) {
        resolvedUserId = existing.id;
      } else {
        const user = await prisma.user.create({
          data: {
            name: 'Demo User',
            email: `demo_${Date.now()}@example.com`,
            password: 'changeme',
          },
        });
        resolvedUserId = user.id;
      }
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        userId: resolvedUserId,
      },
    });

    return NextResponse.json({ task }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}