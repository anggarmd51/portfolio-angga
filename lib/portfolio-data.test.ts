import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_EXPANDED_EXPERIENCE_IDS,
  pipelineStages,
  toggleAccordionIds,
} from "./portfolio-data";

test("default expanded experience IDs include top 2 recent positions", () => {
  assert.deepEqual([...DEFAULT_EXPANDED_EXPERIENCE_IDS], [1, 2]);
});

test("toggleAccordionIds collapses an open item and expands a closed item", () => {
  const afterClosingFirst = toggleAccordionIds([1, 2], 1);
  assert.deepEqual(afterClosingFirst, [2]);

  const afterOpeningThird = toggleAccordionIds(afterClosingFirst, 3);
  assert.deepEqual(afterOpeningThird, [2, 3]);
});

test("pipelineStages preserve 7 chronological stages with month weights and saasStart marker", () => {
  assert.equal(pipelineStages.length, 7);
  assert.equal(pipelineStages[0].label, "Surveyor");
  assert.equal(pipelineStages[0].months, 19);
  assert.equal(pipelineStages[5].label, "BDM");
  assert.equal(pipelineStages[5].saasStart, true);
  assert.equal(pipelineStages[6].label, "Account Mgr");
  assert.equal(pipelineStages[6].latest, true);
});
