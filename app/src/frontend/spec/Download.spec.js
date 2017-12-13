import {
  select,
} from "d3-selection";

const _App = window._App;

describe("Download panel for an empty project", function() {
  const holder = select("body").append("div");
  holder.append("div").attr("id", "downloadaaa");
  let app;
  beforeAll(function(done) {
    app = _App("#downloadaaa", {
      testdata: "fakeTools",
      showAllFiles: true,
      showAllProjects: true,
    });
    app.$router.push("/download");
    setTimeout(() => {
      app.$store.commit("setCurrToolName", "x1");
      done();
    }, 600);
  });

  it("should not display loading spinner", function(done) {
    expect(holder.selectAll(".spinner-pct-container").size()).toEqual(0);
    done();
  });

  afterAll(function(done) {
    holder.remove();
    done();
  });
});

describe("Download panel for a project with completed transfer", function() {
  const holder = select("body").append("div");
  holder.append("div").attr("id", "downloadccc");
  let app;

  beforeAll(function(done) {
    app = _App("#downloadccc", {
      testdata: "fakeTools",
      showAllFiles: true,
      showAllProjects: true,
    });
    app.$router.push("/download");
    setTimeout(() => {
      app.$store.commit("setCurrToolName", "x3");
      done();
    }, 100);
  });

  it("should have 2 completed icons for downloads", function(done) {
    setTimeout(() => {
      expect(
        holder.select("#file-status-table-body")
          .selectAll(".file-status-cell-status .material-icons")
          .filter(function(d) {
            return select(this).html() == "check_circle";
          })
          .size())
        .toEqual(2);

      done();
    },1);
  });

  afterAll(function(done) {
    holder.remove();
    done();
  });
});