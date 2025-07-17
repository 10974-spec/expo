import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis'


const redis = new Redis({
    redis:Redis.fromEnv(),
    limiter: Ratelimit(),
})

await redis.set("foo", "bar");
await redis.get("foo");