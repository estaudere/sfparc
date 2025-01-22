import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_BM3j0JF6a55KimKJ439Qc7iZaDtDlmq1UVYxDk1J7TG',
      { api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only' }
    )
  }
  return
};

export const prerender = true;