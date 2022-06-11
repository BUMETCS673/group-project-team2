
import Job from "../model/job.type"
import api from "../middleware/restclient/api";
class JobService {
  getAll() {
    return api.get("/jobs",{});
  }

  get(id: string) {
    return api.get(`/jobs/${id}`,{});
  }

  create(data: Job) {
    return api.post("/jobs", data);
  }

  update(data: Job, id: any) {
    return api.put(`/jobs/${id}`, data);
  }

  delete(id: any) {
    return api.delete(`/jobs/${id}`,id);
  }
}
export default new JobService();