interface ArtworkVisit {
  artworkId: string;
  startTime: number;
  endTime?: number;
}

class GalleryTracker {
  private visits: Map<string, ArtworkVisit[]> = new Map();

  startVisit(visitorId: string, artworkId: string): void {
    const visit: ArtworkVisit = {
      artworkId,
      startTime: Date.now(),
    };

    if (!this.visits.has(visitorId)) {
      this.visits.set(visitorId, []);
    }

    this.visits.get(visitorId)!.push(visit);
  }

  endVisit(visitorId: string, artworkId: string): void {
    const visitorVisits = this.visits.get(visitorId);
    if (!visitorVisits) return;

    const visit = visitorVisits.find(
      (v) => v.artworkId === artworkId && !v.endTime
    );
    if (visit) {
      visit.endTime = Date.now();
    }
  }

  getVisitDuration(visitorId: string, artworkId: string): number | null {
    const visitorVisits = this.visits.get(visitorId);
    if (!visitorVisits) return null;

    const visit = visitorVisits.find(
      (v) => v.artworkId === artworkId && v.endTime
    );
    if (!visit) return null;

    return visit.endTime! - visit.startTime;
  }

  getTotalTimeSpent(visitorId: string): number {
    const visitorVisits = this.visits.get(visitorId);
    if (!visitorVisits) return 0;

    return visitorVisits.reduce((total, visit) => {
      if (visit.endTime) {
        return total + (visit.endTime - visit.startTime);
      }
      return total;
    }, 0);
  }
}

export default GalleryTracker;
