const API_URL = import.meta.env.VITE_API_URL || '/api';

class WearableService {
  static async getWearablesByUser(username: string): Promise<any[]> {
    const res = await fetch(`${API_URL}/${username}/wearables`);
    if (!res.ok) throw new Error('Error fetching wearables');
    return res.json();
  }

  static async getWearableDetail(username: string, slug: string) {
    const res = await fetch(`${API_URL}/${username}/${slug}`);
    if (!res.ok) throw new Error('Error fetching wearable detail');
    return res.json();
  }
}

export default WearableService;
